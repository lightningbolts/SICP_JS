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

(define (A x y)
  (if (= y 0)
      0
      (if (= x 0)
          (* 2 y)
          (if (= y 1)
              2
              (A (- x 1) (A x (- y 1)))))))
(trace A)

(define (h n)
  (A 2 n))

(trace h)

(define (f n)
  (A 1 n))

(trace f)


(define arrow expt)

(define (arrow2 n)
  (arrow n (arrow n n)))
(trace arrow2)


  

