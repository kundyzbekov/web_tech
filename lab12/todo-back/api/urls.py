from django.urls import path
from api.views import views_old, fbv

urlpatterns = [
    #path('task_lists/', views.task_lists),
    #path('task_lists/<int:pk>/', views.task_list_detail),
    #path('task_lists/<int:pk>/tasks/', views.task_list_tasks),
    #path('tasks/<int:pk>/', views.task_detail)

     # fbv
    path('task_lists/', fbv.task_lists),
    path('task_lists/<int:pk>/', fbv.task_list_detail),
    path('task_lists/<int:pk>/tasks/', fbv.task_list_tasks),
    path('tasks/<int:pk>/', fbv.task_detail)
]
