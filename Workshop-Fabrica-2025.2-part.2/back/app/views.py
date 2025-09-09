from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def home(request):
    return Response({"message": "Django API is running"})

@api_view(['POST'])
def button_signal(request):
    message = request.data.get('message', 'No message')
    print(f"Botão pressionado! Mensagem: {message}")
    return Response({
        "status": "received", 
        "message": f"Sinal recebido: {message}"
    }, status=status.HTTP_200_OK)
