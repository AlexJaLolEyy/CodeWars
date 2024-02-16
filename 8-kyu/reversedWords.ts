export function reverseWords(str: string): string {
    return str.split(" ").reverse().join(" ");
  }
  reverseWords("Hello There! General Kenobi....")