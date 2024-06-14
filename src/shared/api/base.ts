const API_URL = process.env.VITE_API_URL || '';

class ApiInstance {
  private baseUrl: string;
  private timeout: number;
  private headers: HeadersInit;

  constructor() {
    this.baseUrl = API_URL;
    this.timeout = 120000;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  private fetchWithTimeout(
    url: string,
    options: RequestInit,
    timeout: number,
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error('Request timed out'));
      }, timeout);

      fetch(url, options)
        .then((response) => {
          clearTimeout(timer);
          resolve(response);
        })
        .catch((err: unknown) => {
          clearTimeout(timer);
          if (err instanceof Error) {
            reject(err);
          } else {
            reject(new Error(String(err)));
          }
        });
    });
  }

  async get<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<[string | null, T]> {
    const url = `${this.baseUrl}${endpoint}`;
    const mergedOptions: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        ...this.headers,
        ...options.headers,
      },
    };

    const response = await this.fetchWithTimeout(
      url,
      mergedOptions,
      this.timeout,
    );

    if (!response.ok) {
      throw new Error(
        `Error: ${response.status.toString()} ${response.statusText}`,
      );
    }

    const data: T = (await response.json()) as T;
    return [response.headers.get('x-total-count'), data];
  }
}

export const apiInstance = new ApiInstance();
