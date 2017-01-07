# Simple Table

In this example, a table is displayed with the marks of students in each row.
On clicking total, the entire state is re-rendered with the additional column total marks scored. On clicking percentage the entire state is re-rendered with the additional column percentage which calculates the percentage of marks.

### Basic features

  1) Create Table creates a new table with the date. Can be retrieved from external JSON file returned from network request too.

  2) There are two functions. One calculates the sum and the other calculates the percentage

  3) The buttons are automatically disabled to prevent addition to duplicate rows to the table

  4) The two functions add content to the tableData object. The object is then passed to the createTable method. This ensure
  that the table element is updated with this tableData object values.
