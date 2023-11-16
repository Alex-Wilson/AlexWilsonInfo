#### Guide to Deploy a Website

### No Code Start Up

## Assumptions and Introduction

## Password Manager
    #Running a website of any size will require many accounts. These accounts will require email addresses and passwords. In order to safely store and retrieve passwords we MUST use a password manager. I recommend KeyPassXC or any other self-hosted and open-source password manager. Create a high enrtropy master password via the XKDC technique or with a cryptograhically sercure string generator like the one in KeyPassXC. Memorize this master password. Avoid keyboard walks, word-juctions, and symbol replacement/concatanation.

    #TO-DO:
    Create secure AND memorable masterpassword.
    Download and install password manager.
    Create vault/volume in which to store passwords.
    Secure vault/volume with password.

    #NOTES:
    Using KPXC.

## Email Address
    #It is best practice to use a new, unique, and purposeful email address for each online service. This address should not disclose any personal or confidential information (year/month/date of birth, first/last/maiden/pet names, location, interests, etc.) It is best to host your own email service but if you are unable to, then use a relatively secure and discreet service like Proton.me. Email addresses are  commonly used to track people across different websites and services. Use an email relay service.

    #TO-DO:
    Create email account.
    Configure an email relay. Can use Firefox Relay or alternatives. All relay email addresses and passwords will be stored in the password manager.
    Configure Multi Factor Authentication. Avoid SMS/Voice authentication.
    Configure recovery protocol.

    #NOTES:
    Using gmail address with Firefox relay.

## Domain Name Aquisition
    #To aquire a domain name establish an account with a domain registrar. Determine the feasible domain names. Purchase the domain name. This can sometimes take time. For many online services, the web address/URL/domain name IS the entirety of the brand. Domains should be descriptive, memorable, and short. This is like naming a child or an animal. It's a huge decision (as the prices reflect). 
    
    #TO-DO:
    Create an account with a domain registrar (SquareSpace, Namecheap, GoDaddy, NameSilo).
    Determine Domain Name:
        Determine Top Level Domain (.com, .org, .net, etc.).
        Determine hostname (google, amazon, openai).
        Determine affordable URL alternative if required. (avoid .biz as it is blocked by lots of machines, thats why they are so cheap lol).
    Purchase desired domain name.

    #NOTES:
    Used Google domains but this was migrated to SquareSpace after they were bought out. They have been great and have reasonable prices.

## Hosting Provider
    #Select a hosting provider that values your security, privacy, and wallet. Many hosting providers will nickel and dime customers who want robust configuration options and capabiltiies. 

    #TO-DO:
    Determine Hosting Provider
    Create account with chosen hosting provider.
    Link payment method to hosting provider.

    #NOTES:
    Hosting AlexWilson.info via DigitalOcean.

## Create SSH Keys
    # SSH Keys are like a secret handshake. There is a public part and a secret part. Keep the secret part a secret. These will enable us to log-in with a file and a password. 

    TO-DO:
    Generate SSH Keys
        Run cmd.exe
        Execute ' mkdir C:\*\your_key_folder'
        Execute 'ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f "C:\*\your_key_folder\key_name" '
        Generate a secure password for this key in KPXC
        Use this generated password to complete the SSH keygen proccess
        Navigate to 'C:\path\to\your\directory\your_key_filename"
            NEVER EXPOSE A PRIVATE KEY TO SOMEONE ELSE

## Setting Up Web Server Enviornement:
    # Setting up the DO droplet. Again this is a no code config. This can all be accomplished using DigitalOcean's own cli tool called cloud-init.

    TO-DO:
    # Create Digital Ocean Project:
        Name the project
        Add description
        Add purpose

    # Create Digital Ocean (DO) Droplet:
        Select a region in the same country.
        Select a region relatively close to your main population of customers.
        Select Ubuntu 22.04+ as the OS
        Add the newly created public key to Digital Ocean with a memorable label.
        Enable "Improved Metrics Monitoring and Alerting"
        Enable "VPC and Protections"
        Give the box a sick host name because the format of the terminal will be "user@host_name"
            Trust me you want to feel cool writing reports about bad C code

    # Enable IPV6
        When viewing the droplet, click the link just that says "enable now", next to the "ipv6" text
        Click the enable IPv6 button.

    # Update DNS Records with Domain Registrar:
        Go to the domain registrar account that was created earlier. There will be an option to configure the name servers this domain will use.

        Name Servers:
        ns1.digitalocean.com
        ns2.digitalocean.com
        ns3.digitalocean.com

    # Update DNS Records on Digital Ocean:
        Create the following records on Digital Ocean under the "Domain" tab for your droplet:
        A      example.com    ipv4/6 address of box     3600
        NS     example.com    ns1.digitalocean.com      86400
        NS     example.com    ns2digitalocean.com      86400
        NS     example.com    ns3.digitalocean.com      86400
        
    # Create standard webserver firewall
        Click the create firewall button    
        Name the rule set something like "default firewall"
        Create the following rules:

        Inbound Rules:
        SSH   TCP  22  ALL IP4/6
        HTTP  TCP  80  ALL IP4/6
        HTTPS TCP  443 ALL IP4/6

        Outbound Rules:
        SSH   TCP  22  ALL IP4/6
        HTTP  TCP  80  ALL IP4/6
        HTTPS TCP  443 ALL IP4/6

    # Restart the droplet
        Naviagte to the "Power" tab of the droplet
        Click the power cycle option
-----------------------------------------------------------------------------------------------
## Creating Github Account and Repo
    # TO-DO:
        Create github account
            use the password manager to generate the password
        Add generated SSH keys to Github account
        Create github repo to host the 
-----------------------------------------------------------------------------------------------


## First Log In
    # Update and Upgrade Packages:
        XXX
        XXX
        XXX

    # Disable login as root:
        Login as root
        create user
        usermod user
        su user
        Disable Login as Root
        restart ssh


## Extra Hardening
    Disable login as root:
        Login as root
        create user
        usermod user
        su user
        Disable Login as Root
        restart ssh

    Update and Upgrade Packages:
        XXX
        XXX
        XXX


## Strech the legs
    Check git
    check node
    check express


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Running Background Proccess with Screen Command