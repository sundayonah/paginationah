# paginationah

A simple, efficient TypeScript pagination utility for handling pagination logic in your applications.

## Table of Contents

-  [Installation](#installation)
-  [Usage](#usage)
-  [API Documentation](#api-documentation)
-  [Examples](#examples)
-  [License](#license)
-  [Keywords](#keywords)

<!-- ![PAGINATION](./image.png) -->

## Installation

Install the `paginationah` package via npm:

npm install paginationah
or using Yarn:
yarn add paginationah

## usage

```typescript
'use client';

import { useState } from 'react';
import { paginationah } from 'paginationah';
import { User } from '../page';

interface UsersListProps {
   users: User[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 3;
   const pagination = paginationah({
      currentPage,
      totalItems: users.length,
      itemsPerPage,
   });

   const paginatedUsers = users.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
   );

   const pageNumbers = Array.from(
      { length: pagination.totalPages },
      (_, i) => i + 1
   );

   return (
      <div className="max-w-4xl mx-auto py-10">
         <h1 className="text-3xl font-bold text-center mb-8">Users List</h1>
         <ul className="space-y-4">
            {paginatedUsers.length > 0 ? (
               paginatedUsers.map((user, index) => (
                  <li key={index} className="bg-white shadow-lg rounded-lg p-6">
                     <div>
                        <h2 className="text-xl font-semibold">
                           {user.firstname} {user.lastname}
                        </h2>
                        <p className="text-gray-600">
                           {user.age} years old, {user.sex}
                        </p>
                        <p className="text-gray-500 text-sm">
                           Created at:{' '}
                           {new Date(user.createdAt).toLocaleString()}
                        </p>
                     </div>
                  </li>
               ))
            ) : (
               <p className="text-center text-gray-500">No users found.</p>
            )}
         </ul>

         <div className="flex justify-center space-x-4 mt-8">
            <button
               onClick={() => setCurrentPage(currentPage - 1)}
               disabled={pagination.previousPage === null}
               className={`px-4 py-2 rounded ${
                  pagination.previousPage === null
                     ? 'bg-gray-300'
                     : 'bg-blue-500 text-white'
               }`}
            >
               Previous
            </button>
            <div className="flex justify-center space-x-2 ">
               {pageNumbers.map((page) => (
                  <button
                     key={page}
                     onClick={() => setCurrentPage(page)}
                     className={`px-4 py-2 rounded ${
                        currentPage === page
                           ? 'bg-blue-500 text-white'
                           : 'bg-gray-300'
                     }`}
                  >
                     {page}
                  </button>
               ))}
            </div>

            <button
               onClick={() => setCurrentPage(currentPage + 1)}
               disabled={pagination.nextPage === null}
               className={`px-4 py-2 rounded ${
                  pagination.nextPage === null
                     ? 'bg-gray-300'
                     : 'bg-blue-500 text-white'
               }`}
            >
               Next
            </button>
         </div>
      </div>
   );
};

export default UsersList;
```

## API Documentation

### `paginate({ currentPage, totalItems, itemsPerPage }): PaginationResult`

-  **currentPage**: The current page number.
-  **totalItems**: The total number of items.
-  **itemsPerPage**: The number of items per page.

**Returns**:

-  **totalPages**: Total number of pages.
-  **currentPage**: Current page number.
-  **nextPage**: The next page number or `null` if it's the last page.
-  **previousPage**: The previous page number or `null` if it's the first page.

## keywords

-  \*\*paginationah
-  \*\*typescript
-  \*\*npm
