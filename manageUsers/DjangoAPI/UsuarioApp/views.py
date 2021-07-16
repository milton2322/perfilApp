from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from UsuarioApp.models import Rols, Users
from UsuarioApp.serializers import RolSerializer, UserSerializer

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def rolApi(request, id=0):
    if request.method == 'GET':
        rols = Rols.objects.all()
        rols_serializer = RolSerializer(rols, many=True)
        return JsonResponse(rols_serializer.data, safe=False)

    elif request.method=='POST':
        rol_data=JSONParser().parse(request)
        rol_serializer = RolSerializer(data = rol_data)
        if rol_serializer.is_valid():
            rol_serializer.save()
            return JsonResponse("Added Succesfully", safe=False)
        return JsonResponse("Campo requerido", safe=False)

    elif request.method=='PUT':
        rol_data=JSONParser().parse(request)
        rol= Rols.objects.get(rolId = rol_data['rolId'])
        rol_serializer = RolSerializer(rol, data=rol_data)
        if rol_serializer.is_valid():
            rol_serializer.save()
            return JsonResponse("Update Succefully", safe=False)
        return JsonResponse("Failed to Update", safe=False)

    elif request.method=='DELETE':
        rol = Rols.objects.get(rolId=id)
        print("mirando rol", rol)
        rol.delete()
        return JsonResponse("Delete Succesfully", safe=False)

@csrf_exempt
def userApi(request, id=0):
    if request.method == 'GET':
        users = Users.objects.all()
        users_serializer = UserSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)

    elif request.method=='POST':
        user_data=JSONParser().parse(request)
        print("mostrado****",user_data)
        user_serializer = UserSerializer(data = user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Added Succesfully", safe=False)
        return JsonResponse("Campos obligatorios", safe=False)

    elif request.method=='PUT':
        user_data=JSONParser().parse(request)
        user= Users.objects.get(userId = user_data['userId'])
        user_serializer = UserSerializer(user, data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Update Succefully", safe=False)
        return JsonResponse("Failed to Update", safe=False)

    elif request.method=='DELETE':
        user = Users.objects.get(userId=id)
        user.delete()
        return JsonResponse("Delete Succesfully", safe=False)

@csrf_exempt
def SaveFile(request):
    file = request.FILES['uploadedFile']
    file_name = default_storage.save(file.name, file)

    return JsonResponse(file_name, safe=False)


