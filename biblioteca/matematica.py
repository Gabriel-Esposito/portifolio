"""
By: Gabriel de abreu / GitHub: {https://github.com/Lendario-br}
"""

class Matematica:
    def __init__(self):
        pass

    def Mais(num1,num2):
        res = float(num1) + float(num2)
        return res
    
    def Menos(num1,num2):
        res = float(num1) - float(num2)
        return res
    
    def Vezes(num1,num2):
        res = float(num1) * float(num2)
        return res
    
    def Div(num1,num2):
        res = float(num1) / float(num2)
        return res
    
    def Eleve(num1,num2):
        res = float(num1) ** float(num2)
        return res
    
    def Porcento(num1,num2):
        res = (float(num1)/100)*float(num2)
        return res
    
    def Hip(num1,num2):
        res = (float(num1)**2) + (float(num2)**2)
        return res
    
    def Kel(num1):
        res = float(num1) + 273
        return res
    
    def Fah(num1):
        res = (float(num1) * 1.8) + 32
        return res
    
    def Fator(num1):
        res = 1
        for numero in range(1,num1+1):
            res *= numero
        return res