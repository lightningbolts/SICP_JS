#lang racket

(define (is_prime n)
  (= n (smallest_divisor n)))

(define (smallest_divisor n)
  (find_divisor n 2))

(define (find_divisor n test_divisor)
  (if (> (square test_divisor) n)
      n
      (if (divides test_divisor n)
          test_divisor
          (find_divisor n (+ test_divisor 1)))))

(define (square n)
  (* n n))

(define (divides a b)
  (= (remainder b a) 0))
