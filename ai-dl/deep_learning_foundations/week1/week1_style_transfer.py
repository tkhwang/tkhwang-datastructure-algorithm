import os


chks = [
    'la-muse.ckpt',
    'scream.ckpt',
    'udnie.ckpt',
    'wave.ckpt',
    'wreck.ckpt',
]

for chk in chks:
    print("[*] %s" % chk)
    run = 'evaluate.py --checkpoint ./checkpoint/' + chk + ' --in-path ./profile.jpg --out-path ./output_image_' + chk + '.jpg'
    os.system('python ' + run)


