const API_URL = 'https://my-json-server.typicode.com/H1Do/MockData/';

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
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  }

  async get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
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
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data: T = await response.json();
    return data;
  }
}

export const apiInstance = new ApiInstance();
