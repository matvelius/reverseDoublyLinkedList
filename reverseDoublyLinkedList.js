class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

function solution(node) {

  let currentNode = node

  while (currentNode != null) {

    // last element
    if (currentNode.next == null) {
      currentNode.next = currentNode.prev
      currentNode.prev = null
      return currentNode
    }

    // switch next & prev
    let temp = currentNode.next
    currentNode.next = currentNode.prev
    currentNode.prev = temp

    // go on to the next node
    currentNode = temp
  }

}

// function printDLL(head) {
//   let currentNode = head
//   while (currentNode != null) {
//     console.log(currentNode.value)
//     currentNode = currentNode.next
//   }
// }

// let el5 = new Node(5)
// let el4 = new Node(4)
// let el3 = new Node(3)
// let el2 = new Node(2)
// let el1 = new Node(1)

// el1.next = el2
// el2.prev = el1
// el2.next = el3
// el3.prev = el2
// el3.next = el4
// el4.prev = el3
// el4.next = el5
// el5.prev = el4

// printDLL(solution(el1))