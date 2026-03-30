from django.shortcuts import render
from .models import Category, Product
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializer import CategorySerializer, ProductSerializer
# Create your views here.

# def products_list(request):
#     products = list(Product.objects.values())

#     return JsonResponse({"products": products})

# def products_detail(request, id):

#     try:
#         product = Product.objects.get(id=id)
#         data = {
#             'product': {
#                 'product_name': product.name,
#                 'product_price': product.price,
#                 'product_description': product.description,
#                 'product_count': product.count,
#                 'is_active': product.is_active,
#                 'category': product.category,

#             }
#         }

#         return JsonResponse(data)
    
#     except Product.DoesNotExist:
#         return JsonResponse({'error': 'Not Found'}, status=404)

# def category_list(request):
#     category = list(Category.objects.values())

#     return JsonResponse({'category': category})

# def category_deatil(request, id):
#     try:
#         category = Category.objects.get(id=id)

#         data = {
#             'category': {
#                 'category_name': category.name,
#             }
#         }

#         return JsonResponse(data)

#     except Category.DoesNotExist:
#         return JsonResponse({'error': 'Not Found'}, status=404)
    
# def category_products(request, id):

#     category = Category.objects.get(id=id)
#     products = list(category.product_set.values())

#     return JsonResponse({'products': products, 'category': category})

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class=CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(self.products, many=True)

        return Response(serializer.data)        



class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class=ProductSerializer
    


