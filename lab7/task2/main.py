from models import Product
from models import Drink
from models import Cake

p1 = Product(1, "Bread", 2.5, 20)
c1 = Cake(2, "Chocolate Cake", 15.0, 5, 10.5, True)
d1 = Drink(3, "Cola", 3.0, 30, 500, True)


products = [p1, c1, d1]


for item in products:
    

    item.inc_amount(5)
    item.dec_amount(2)

    print(item)
    print('\n\n')
