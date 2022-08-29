# QM-react-example
Project to show firefox is not compatible in react with QuoteMedia qMods


# Project Setup
1: npm install
2: redirect localhost to dev.invest.inc to allow qMod loading on allowed domains 
    Mac: 
        1: from the root directory: sudo nano /etc/hosts
        2: add line: 0.0.0.0 dev.invest.inc
        3: save hosts file
    Windows: https://docs.rackspace.com/support/how-to/modify-your-hosts-file
3: npm start
4: Open browser at : https://dev.invest.inc:3000/
5: Allow browser to bypass security: Advanced settings - procceed to unsafe(You know site is safe because it is your localsite). 

# Firefox Issue
qMods will not load if using custom templates.
You can remove the custom template and the qmod will load. Simple remove the script tag including its contents to see.
