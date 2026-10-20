from setuptools import setup, find_packages

setup(
    name='apiverve_treasuryyields',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Treasury Yields provides current and historical US Treasury constant-maturity market yields across the full curve (1-month through 30-year), plus TIPS real yields. Essential data for yield curve analysis and fixed income research.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/treasuryyields?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
