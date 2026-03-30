from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import CategoryViewSet, ProductViewSet


router = DefaultRouter()
router.register('categories', CategoryViewSet, basename='category')
router.register('product', ProductViewSet, basename='product')


# urlpatterns = [
#     # path('products/', views.products_list, name='product_list'),
#     # path('products/<int:id>/', views.products_detail, name='product_deatil'),
#     # path('categories/', views.category_list, name='category_list'),
#     # path('categories/<int:id>/', views.category_deatil, name='category_list'),
#     # path('categories/<int:id>/products', views.category_products, name='category_products'),
#     path('/api', include(router.urls))

# ]

urlpatterns = router.urls

