# Grid-Gap Gotcha  
  
Anything other than a centered gap will be off if column count isn’t equal. This is because the number of **gaps** have to be equal — Grid subtracts the gaps and distributes the remainder.   
  
The way to avoid these misalignments is to always have the same number of gaps and use `grid-template-auto` to _span_ columns.  
  
```  
  
  1fr    1fr    1fr  
+------+------+------+  
|      |      |      |  
|  a   |  b   |  c   |  
|      |      |      |  
+------+------+------+  
  
  2fr          1fr  
+------------+-------+  
|            |       |  
|  a         |  b    |  😒  
|            |       |  
+------------+-------+  
  
  1fr    1fr    1fr  
+------+------+------+  
|      |      |      |  
|  a   |  a   |  b   |  😀  
|      |      |      |  
+------+------+------+  
  
```  
  
