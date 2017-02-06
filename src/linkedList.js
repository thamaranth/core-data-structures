'use strict'

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export default class LinkedList {
  constructor() {
    this.count = 0
    this.head = null
    this.tail = null
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
    }
    this.tail = newNode
    this.count++

    return newNode
  }

  insertFirst(item) {
    const newNode = new Node(item)

    if (this.head) {
      newNode.next = this.head
    } else {
      this.tail = newNode
    }

    this.head = newNode
    this.count++

    return newNode

  }

  insertBefore(item, data) {
    const node = new Node(data)
    node.next = this.find(item)

    if (node.next === this.getHeadNode()) {
      this.head = node
    } else {
      let currentNode = this.getHeadNode()
      while (currentNode.next !== node.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    }
    this.count++

  }

  insertAfter(item, data) {
    const node = new Node(data)
    if (this.find(item) === this.getTailNode()) {
    this.tail = node
    }
    node.next = this.find(item).next
    this.find(item).next = node
    this.count++

  }

  remove() {
    if (this.count === 1) {
      this.clear()
    } else {
      let currentNode = this.getHeadNode()
      while (currentNode.next.next) {
        currentNode = currentNode.next
      }
      currentNode.next = null
      this.count--
      this.tail = currentNode
    }

  }

  removeFirst() {
    if (this.count === 1) {
      this.clear()
    } else {
      this.head = this.getHeadNode().next
      this.count--
    }

  }

  isEmpty() {
    if(!this.head){
      return null
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
