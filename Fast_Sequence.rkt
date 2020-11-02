#lang racket

(define (C x)
  (expt x x))

(define (C2 x)
  (C (C x)))

(define (smooth f dx)
  (define (helper x)
    (average (f (- x dx)) (f x) (f (+ x dx))))
  helper)

(define (average x y z)
  (/ (+ x y) 3))