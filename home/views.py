from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html',)
    #return HttpResponse("This is homepage")
def about(request): 
    return render(request,'about.html',)
    #return HttpResponse("This is aboutpage")
def services(request):
    return render(request,'services.html',)
    #return HttpResponse("This is Servicespage")
def contact(request):
    return render(request,'contact.html',)
    # return HttpResponse("This is contactpage")
def login(request):
    return render(request,'login.html')
def signup(request):
    return render(request,'Signup.html')