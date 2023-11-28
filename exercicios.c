#include <stdio.h>
//escreva um programa em C que peça ao usuario dois inteiros e apresente o resultado
//da realização das operações aritmeticas.
int main(){
int num1, num2;

scanf("%d" , &num1);
scanf("%d" , &num2);

//soma 

printf("%d + %d = %d\n", num1, num2, num1 + num2);

//subtração 
printf("%d + %d = %d\n", num1,num2,num1 - num2);

//multiplicação
printf("%d + %d = %d\n", num1,num2,num1 * num2);

//modulo (resto da divisão)
printf("%d + %d = %d\n", num1,num2,num1 % num2);
}