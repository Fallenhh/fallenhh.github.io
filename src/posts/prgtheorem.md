---
title: "图灵机掷骰子吗？"
date: "2020-09-03"
---
**本篇处于草稿状态**
图灵机掷骰子吗？

不会，而且也不需要。只要它自己觉得结果像就行了。

这就是伪随机生成器定理。

<!-- endexcerpt -->

### 引子
---
What is the purpose of our defense policy?

---
To defend Britain.

---
No, Bernard. 
![It is to make people BELIEVE Britain is defended](https://i.loli.net/2020/09/03/JcEkKFnW2a7L9Gq.png "The Russian? Not the Russian, the British! Russians know its not")

### 伪随机性

所谓伪随机性，就是某种分布和真随机实在太像了，以至于人们没法在多项式时间内找出该分布的纰漏。

令$ U $为一个含有若干0和1的真随机的均匀分布，$ D_{n} $为我们想要验证的含有分布，$ C $为**任意**的多项式规模的布尔电路（可以理解为小于多项式的时间/空间复杂度的**输出为0或1**的算法），$ \varepsilon $ 为与$ n $ 相关的**任意**多项式的倒数，伪随机分布的严谨定义如下：
$$
|\Pr_{x\subset U}[C(X)=1] - \Pr_{x\subset D}[C(X)=1]|\leq \varepsilon
$$

从反面来说，如果我们能找到一个确定的多项式规模的算法，以足够大的优势鉴别出$ x $是从$ U $或者是$ D_{n} $中选出来的，那么我们就可以说这个分布也许欺骗不过图灵机。

e.g. 我们构造这样一个$ C(x) $，当$ x $中的0多余1时输出0，否则输出1。显然，$ \Pr_{x\subset U}[C(X)=1] = 1$，因为真正的均匀随机分布0和1的数量应当是相等的。如果一个分布中0总是以$ \varepsilon $的优势多于或是少于1，那么我们就可以说这个分布被$ C $所攻破了。

e.g. 我们假设$ D_{n} $是一个由RC4算法生成的一个序列，构造$ C(x) $