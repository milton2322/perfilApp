from rest_framework import serializers
from UsuarioApp.models import Rols, Users

class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rols
        fields = ('rolId', 'rolName')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('userId', 'userName', 'rol', 'photoFileName')