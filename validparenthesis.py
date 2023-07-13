class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        for letter in s:
            if letter == '{' or letter == '[' or letter =='(':
                stack.append(letter)
            else:
                if(len(stack) < 1):
                    return False
                top = stack.pop()
                if(top == '{' and letter != '}' or top =='[' and letter !=']' or top =='(' and letter != ')'):
                    return False
        
        return not stack
            