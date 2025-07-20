height_factor = 2997 / 256
width_factor = 3296 / 341
nums = [3030,0,3035,1959,2829,1957,2835,2997,3296,2997,3296,0]
done = []
for i, num in enumerate(nums):
    if i % 2 == 0:
        done.append(round(num / width_factor))
    else:
        done.append(round(num / height_factor))

print(done)