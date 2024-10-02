import { PaginationOptions, PaginationResult } from './types/interfaces';

export function paginate({
   currentPage,
   totalItems,
   itemsPerPage,
}: PaginationOptions): PaginationResult {
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
