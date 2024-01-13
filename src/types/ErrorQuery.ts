type ErrorQuery = {
  error: {
    message: string;
    status: number;
    name?: string;
  };
};
export default ErrorQuery;
