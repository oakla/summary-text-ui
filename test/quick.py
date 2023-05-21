from mksum import writer
import paths

out_dir = paths.TEST_OUTPUT_FOLDER
out_dir.mkdir(parents=True, exist_ok=True)
out_file = out_dir / "out.html"

with open(out_file, 'w') as fp:
    fp.write('test file content')