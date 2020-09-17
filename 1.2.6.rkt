#lang racket

(define (naive_prime n)
  (define d 2)
  (while (< d (+ (/ n 2) 1))
         (if (= (remainder n d) 0)
             #f
             (set! d (+ d 1)))))


(define (while condition body)
  (when (condition)
    (body)
    (while condition body)))