# Grids inside grids  
  
Lining up grids inside of grids requires that the outside number of columns used is divisible by the total columns of the inner grid. The other requirement is to avoid left and right margins/padding on the inner grid so that everything can line up as desired. There a a handful of reasons why you might do this: special one-off components, carousels where the slides need to align with the normal layout (adding a grid to children of children of children), and others.  
  
```  
          this  
       +------+------+------+------+  
       |      |      |      |      |  
       |  z   |  z   |  z   |  z   |  
       |      |      |      |      |  
       +------+------+------+------+  
  
          ... will go inside this  
+------+------+------+------+------+------+  
|      |      |      |      |      |      |  
|  .   |  a   |  a   |  a   |  a   |  .   |  
|      |      |      |      |      |      |  
+------+------+------+------+------+------+  
```  
  
