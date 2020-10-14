#lang racket

(define (sum_integers a b)
  (if (> a b)
      0
      (+ a (sum_integers (+ a 1 b)))))

(define (sum_cubes a b)
  (if (> a b)
      0
      (+ (cube a) (sum_cubes (+ a 1) b))))

(define (pi_sum a b)
  (if (> a b)
      0
      (+ (/ 1 (* a (+ a 2))) (pi_sum (+ a 4) b))))

(define (cube x)
  (* x x x))

(define (name a b term next)
  (if (> a b)
      0
      (+ (term a) (name (next a) b))))

(define (sum_integers1 a b)
  (define (term x)
    x)
  (define (next y)
    (+ y 1))
    (name a b term next))

(define (sum_cubes1 a b)
  (define (next y)
    (+ y 1))
  (name a b cube next))

(define (pi_sum1 a b)
  (define (term x)
    (/ 1 (* x (+ x 2))))
  (define (next y)
    (+ y 4))
    (name a b term next))

(define (factorial n)
  (if (= n 1)
      n
      (* n (factorial (- n 1)))))

(define (factorial2 n)
  (define (iter n product)
    (if (= n 1)
        product
        (iter (- n 1) (* n product))))
  (iter n 1))
