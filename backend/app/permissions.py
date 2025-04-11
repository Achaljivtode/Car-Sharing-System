from rest_framework.permissions import BasePermission,SAFE_METHODS



class IsAdmin(BasePermission):
    def has_permission(self,request,view):
        return request.user.is_authenticated and request.user.role=='admin'
    
class IsCustomer(BasePermission):
    def has_permission(self,request,view):
        return request.user.is_authenticated and request.user.role=='customer'
    

# permissions.py

class IsCustomerForPostOnly(BasePermission):
    """
    - Allow all authenticated users to GET (or safe methods)
    - Allow POST only if user is a customer
    """

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return request.user.is_authenticated  # admin and customer can view

        if request.method == "POST":
            return request.user.is_authenticated and request.user.role == "customer"

        return False  # block everything else
