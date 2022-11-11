const _ = new ListWidget()
_.url = "weixin://scanqrcode"
const image = _.addImage(await new Request("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFFQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////CDfnXgAAABt0Uk5TADB/r7/f/08Qn1Dvj2DPsEDgkMCAIKDwP9BwBma2/AAAAXpJREFUeJyll+l2hCAMhcWFoo7VEZW27/+gdV8mIQl6f+EZv0NI7oQYRYtUnKSZ1jpN4y8ThcjEE3coV3K2KPWnXtLdK4CO+pZtXmCs1qWENjDmRZkgcjToWQkP115YNyyc+eGUhf2s1mzO3gTccrAlYMvBRMImpx/KkdJ1FHxRCWk5jKTA405MMAXNE7iXwwPMmBxG7Or2H93QUcKsvrukDutdF9jdYPdCs16kYPZfgGlzSXcHbp7A/Q1Y/Wx9Ihg26fh6vqxdKJzM7xfzei10IWXXc9bzw9pLeilcnH1RBHpkM8byNIyrX7k5r3CkGv5ygLD4nBgcsiGAxeU5q33iZ/sA3qeBGw3AJJqAVUzpddznJcJqsSA8yGHoEuq+/hB0SQAMXdLy0CZYaON4ygtH/WBPouAaKbQ4BazFqBRkHEx6hoOpuN8sTMwsbMKoKa/iYW/hRdOA8tCyHqbQyfhPxI6Rw3M7wYE3NVfcdYFffVVrp/CdrfeJ7B/t+iqnLeYCKQAAAABJRU5ErkJggg==").loadImage())
image.imageSize = new Size(30, 30)
image.centerAlignImage()
Script.setWidget(_)
_.presentAccessoryRectangular()
Script.complete()
