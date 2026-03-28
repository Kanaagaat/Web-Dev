from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products_list, name='product_list'),
    path('products/<int:id>/', views.products_detail, name='product_deatil'),
    path('categories/', views.category_list, name='category_list'),
    path('categories/<int:id>/', views.category_deatil, name='category_list'),
    path('categories/<int:id>/products', views.category_products, name='category_products'),
]

