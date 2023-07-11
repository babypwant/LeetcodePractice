# Credit goes to Websten from forums
#
# Program defensively:
#
# What do you do if your input is invalid? For example what should
# happen when date 1 is not before date 2?
#
# Add an assertion to the code for daysBetweenDates to give
# an assertion failure when the inputs are invalid. This should
# occur when the first date is not before the second date.
#  

def nextDay(year, month, day):
    """Simple version: assume every month has 30 days"""
    if day < 30:
        return year, month, day + 1
    else:
        if month == 12:
            return year + 1, 1, 1
        else:
            return year, month + 1, 1
        
def dateIsBefore(year1, month1, day1, year2, month2, day2):
    """Returns True if year1-month1-day1 is before
       year2-month2-day2. Otherwise, returns False."""
    if year1 < year2:
        return True
    if year1 == year2:
        if month1 < month2:
            return True
        if month1 == month2:
            return day1 < day2
    return False        

def daysBetweenDates(year1, month1, day1, year2, month2, day2):
    """Returns the number of days between year1/month1/day1
       and year2/month2/day2. Assumes inputs are valid dates
       in Gregorian calendar."""
    # program defensively! Add an assertion if the input is not valid!
    assert not dateIsBefore(year2, month2, day2, year1, month1, day1)
    days = 0
    while dateIsBefore(year1, month1, day1, year2, month2, day2):
        year1, month1, day1 = nextDay(year1, month1, day1)
        days += 1
    return days

def test():
    test_cases = [((2012,9,30,2012,10,30),30), 
                  ((2012,1,1,2013,1,1),360),
                  ((2012,9,1,2012,9,4),3),
                  ((2013,1,1,1999,12,31), "AssertionError")]
    
    for (args, answer) in test_cases:
        try:
            result = daysBetweenDates(*args)
            if result == answer and answer != "AssertionError":
                print "Test case passed!"
            else:
                print "Test with data:", args, "failed"
    
        except AssertionError:
            if answer == "AssertionError":
                print "Nice job! Test case {0} correctly raises AssertionError!\n".format(args)
            else:
                print "Check your work! Test case {0} should not raise AssertionError!\n".format(args)            
test()



0 dont panic
1 what are the inputs 
2 what are the outputs  
3 write test cases by hand
4 write a simple mechanical solution
5 make incremental progress






const isValid = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(' || char === '[' || char === '{') {
      stack.push(char); // Push opening brackets to the stack
    } else {
      const top = stack.pop(); // Get the top element from the stack

      // Check if the current closing bracket matches the top opening bracket
      if (
        (char === ')' && top !== '(') ||
        (char === ']' && top !== '[') ||
        (char === '}' && top !== '{')
      ) {
        return false; // Invalid closing bracket
      }
    }
  }

  return stack.length === 0; // The stack should be empty for a valid string
};
Explanation:

Create an empty stack to store the opening brackets encountered.
Iterate through each character in the string.
If the character is an opening bracket ('(', '[', '{'), push it onto the stack.
If the character is a closing bracket (')', ']', '}'), pop the top element from the stack and check if it matches the closing bracket. If not, return false as it is an invalid string.
After iterating through the entire string, check if the stack is empty. If it is, the string is valid; otherwise, it is invalid.
This solution leverages the LIFO (Last-In, First-Out) property of the stack to ensure that the brackets are closed in the correct order and have matching types.

You can test this solution by calling the isValid function with different input strings, such as isValid("()"), isValid("()[]{}"), or isValid("(]"), and it will return true or false based on the validity of the string.

I hope this helps! Let me know if you have any further questions.







