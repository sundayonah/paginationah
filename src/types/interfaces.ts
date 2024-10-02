export interface PaginationahOptions {
   currentPage: number;
   totalItems: number;
   itemsPerPage: number;
}

export interface PaginationahResult {
   totalPages: number;
   currentPage: number;
   nextPage: number | null;
   previousPage: number | null;
}
