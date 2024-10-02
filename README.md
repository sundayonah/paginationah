# paginationah

[![npm version](https://img.shields.io/npm/v/paginationah.svg)](https://www.npmjs.com/package/paginationah)
[![license](https://img.shields.io/npm/l/paginationah.svg)](https://www.npmjs.com/package/paginationah)

A simple, efficient TypeScript pagination utility for handling pagination logic in your applications.

## Table of Contents

-  [Installation](#installation)
-  [Usage](#usage)
-  [API Documentation](#api-documentation)
-  [Examples](#examples)
-  [License](#license)
-  [Keywords](#keywords)

## Installation

Install the `paginationah` package via npm:

````bash
npm install paginationah
or using Yarn:
yarn add paginationah

## Examples

### Basic Example

```typescript
import { paginate } from 'paginationah';

const paginationResult = paginate({
  currentPage: 1,
  totalItems: 50,
  itemsPerPage: 10,
});

console.log(paginationResult);
/* Output:
{
  totalPages: 5,
  currentPage: 1,
  nextPage: 2,
  previousPage: null
}
*/
````
