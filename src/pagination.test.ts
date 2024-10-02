import { paginate } from './pagination';
import { PaginationOptions } from './types/interfaces';

describe('Pagination Library', () => {
   it('should return correct pagination details for first page', () => {
      const options: PaginationOptions = {
         currentPage: 1,
         totalItems: 50,
         itemsPerPage: 10,
      };

      const result = paginate(options);

      expect(result.totalPages).toBe(5);
      expect(result.currentPage).toBe(1);
      expect(result.nextPage).toBe(2);
      expect(result.previousPage).toBeNull();
   });

   it('should return correct pagination details for last page', () => {
      const options: PaginationOptions = {
         currentPage: 5,
         totalItems: 50,
         itemsPerPage: 10,
      };

      const result = paginate(options);

      expect(result.totalPages).toBe(5);
      expect(result.currentPage).toBe(5);
      expect(result.nextPage).toBeNull();
      expect(result.previousPage).toBe(4);
   });
});
