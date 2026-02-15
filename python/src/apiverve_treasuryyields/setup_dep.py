from setuptools import setup, find_packages

setup(
    name='apiverve_treasuryyields',
    version='1.1.13',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Treasury Yields provides current and historical interest rates for US Treasury securities including T-bills, T-notes, T-bonds, TIPS, and Floating Rate Notes. Essential data for yield curve analysis and fixed income research.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/treasuryyields?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
