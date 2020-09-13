#lang racket
(define (expt1 b n)
  (if (= n 0)
      1
      (* b (expt1 b (- n 1)))))

(define (expt2 b n)
  (if (>= n 0)
      (expt2_iter b n 1)
      (/ 1 (expt2_iter b (* n -1) 1))))

(define (expt2_iter b counter product)
  (if (= counter 0)
      product
      (expt2_iter b (- counter 1) (* product b))))

(define (fast_expt b n)
  (if (= n 0)
      1
      (if (even n)
          (square (fast_expt b (/ n 2)))
          (* b (fast_expt b (- n 1))))))

(define (even n)
  (= (remainder n 2) 0))

(define (square x)
  (* x x))

(define (built_in_expt b n)
  (expt b n))

(define (even_faster_expt b n)
  (even_faster_expt_iter b n 1))

(define (even_faster_expt_iter b counter product)
  (if (= counter 0)
      product
      (if (even counter)
          (even_faster_expt_iter (square b) (/ counter 2) product)
          (even_faster_expt_iter b (- counter 1) (* product b)))))

(define (times a b)
  (if (= b 0)
      0
      (+ a (times a (- b 1)))))

(define (times_log a b)
  (cond
    [(= b 0) 0]
    [(even b) (double (times_log a (/ b 2)))]
    [(+ a (times_log a (- b 1)))]
    ))

(define (double x)
  (* 2 x))

(define (times_log2 a b)
  (times_log2_iter a b 0))

(define (times_log2_iter a counter sum)
  (cond
    [(= counter 0) sum]
    [(even counter) (times_log2_iter (double a) (/ counter 2) sum)]
    [(times_log2_iter a (- counter 1) (+ sum a))]))
  



