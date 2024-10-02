export interface PaginationOptions {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface PaginationResult {
  totalPages: number;
  currentPage: number;
  nextPage: number | null;
  previousPage: number | null;
}