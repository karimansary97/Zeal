type ErrorQuery = {
  response: {
    data: {error?: string} & string;
    status: number;
  };
  message: string;
};
export default ErrorQuery;
