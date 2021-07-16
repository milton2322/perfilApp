from django.conf.urls import url
from UsuarioApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^rol/$', views.rolApi),
    url(r'^rol/([0-9]+)$',views.rolApi),

    url(r'^user/$', views.userApi),
    url(r'^user/([0-9]+)$',views.userApi),

    url(r'^SaveFile$',views.SaveFile)
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)