#lang racket

(require racket/trace)

(define (fac n)
  (if (= n 1)
      1
      (* n (fac (- n 1)))))

(trace fac)

(define (plus a b)
  (if (= a 0)
      b
      (+ 1 (plus (- a 1) b))))

(trace plus)
(define (plusss a b)
  (if (= a 0)
      b
      (plusss (- a 1) (+ b 1))))
(trace plusss)