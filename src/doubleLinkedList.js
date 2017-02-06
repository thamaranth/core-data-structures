'use strict'

class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }

  getData(){
    return this.data
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.count = 0
    this.head = null
    this.tail = null
  }

  getData() {
   return data
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }


  find(item) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.data === item) {
        return currentNode
      } else {
        currentNode = currentNode.next
      }
    }
    return -1
}

  clear() {
    this.head = null
    this.tail = null
    this.count = 0
  }

  insert(item) {
    const newNode = new Node(item)

    if (this.head === null) {
      this.head = newNode
    } else {
     this.tail.next = newNode
     newNode.prev = this.tail
    }
    this.tail = newNode
    this.count++
  }

  insertFirst(item) {
    const newNode = new Node(item)

    if (this.head) {
      this.head.prev = newNode
      newNode.next = this.head
    } else {
      this.tail = newNode
    }

    this.head = newNode
    this.count++

    return newNode

  }

  insertBefore(item, data) {
    const newNode = new Node(data)
    newNode.next = this.find(item)

    if (newNode.next === this.head) {
      this.head.prev = newNode
      this.head = newNode
    } else {
      let currentNode = this.head
      while (currentNode.next !== newNode.next) {
        currentNode = currentNode.next
    }
    newNode.prev = currentNode
    currentNode.next = newNode
    }
    this.count++

  }

  insertAfter(item, data) {
    const newNode = new Node(data)

    if (this.find(item) === this.tail) {
      newNode.prev = this.tail
      this.tail = newNode
    }
    newNode.next = this.find(item).next
    newNode.prev = this.find(item)
    this.find(item).next = newNode
    this.count++

  }

  remove() {
    const newTail = this.tail.prev

    this.tail.prev = null
    newTail.next = null

    this.count--
    this.tail = newTail

  }

  removeFirst() {
    if (this.count === 1) {
      this.clear()
    } else {
      this.head = this.getHeadNode().next
      this.head.prev = null
      this.count--
    }

  }

  isEmpty() {
    if(!this.head){
      return this.head === undefined
    } else {
      return this.data
    }
  }

  size() {
    return this.count
  }

  contains(item) {
    return this.find(item) !== -1
  }
}
