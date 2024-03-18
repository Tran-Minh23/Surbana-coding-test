export class ResponseTemplate<T> {
  status: number;
  message: string | string[];
  data: T | T[];

  constructor(status: number, message: string | string[], data: T | T[]) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
