from django.urls import path
from . import views

urlpatterns = [
    path('user/signup/', views.signup, name='signup'),
    path('user/signin/', views.signin, name='signin'),
    path('user/signout/', views.signout, name='signout'),
    path('user/resign/', views.resign, name='resign'),
    path('user/profile/', views.profile, name='profile'),
    path('nutrition/<str:date>/', views.nutrition, name='nutrition'),
    path('record/', views.record, name='record'),
    path('record/<int:record_id>/', views.record_id_func, name='recordID'),
    path('record/user/<int:user_id>/', views.record_user_id, name='recordUserID'),
    path('record/<int:review_record_id>/review/', views.review, name='review'),
    path('record/<int:liked_record_id>/liked/', views.liked, name='liked'),
    path('recipe/<str:menu_name_recipe>/', views.recipe_menu_name, name='recipeMenuName'),
    path('menu/', views.menu, name='menu'),
    path('menu/<str:menuname>/', views.menu_name, name='menuName'),
    path('token/', views.token, name='token'),
]
