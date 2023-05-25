from re import template
from string import Template
from importlib_resources import files

def write_file(filename, template, **kwargs):
    with open(filename, 'w') as f:
        f.write(Template(template).substitute(**kwargs))


def get_template_path():
    return files('mksum.assets').joinpath('template.html')
