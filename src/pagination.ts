import { PaginationahOptions, PaginationahResult } from './types/interfaces';

export function paginationah({
   currentPage,
   totalItems,
   itemsPerPage,
}: PaginationahOptions): PaginationahResult {
   const totalPages = Math.ceil(totalItems / itemsPerPage);
   const nextPage = currentPage < totalPages ? currentPage + 1 : null;
   const previousPage = currentPage > 1 ? currentPage - 1 : null;

   return {
      totalPages,
      currentPage,
      nextPage,
      previousPage,
   };
}
