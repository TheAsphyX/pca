﻿//-----------------------------------------------------------------------
// <copyright file="CompositionRoot.cs" company="CNVVF">
// Copyright (C) 2018 - CNVVF
//
// This file is part of Public Competition Application (PCA).
// PCA is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// PCA is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see http://www.gnu.org/licenses/.
// </copyright>
//-----------------------------------------------------------------------
using SimpleInjector;

namespace PCA.CompositionRoot
{
    internal static class CompositionRoot
    {
        internal static void Wire(Container container)
        {
            container.Register<Services.CfChecker.ICfChecker, CfChecker.Impl.CfChecker>(Lifestyle.Scoped);

            container.Register<
                DomainModel.Services.IActiveApplicationExistsByFiscalCode,
                Persistence.MongoDB.DbServices.ActiveApplicationExistsByFiscalCode>(Lifestyle.Scoped);

            container.Register<
                DomainModel.Services.IActiveApplicationExistsByFiscalCodeAndPin,
                Persistence.MongoDB.DbServices.ActiveApplicationExistsByFiscalCodeAndPin>(Lifestyle.Scoped);

            container.Register<
                DomainModel.Services.ISubmitApplication,
                Services.Submission.SubmitApplication>(Lifestyle.Scoped);

            container.Register<
                DomainModel.Services.IGetActiveApplicationsByFiscalCode,
                Persistence.MongoDB.DbServices.GetActiveApplicationsByFiscalCode>(Lifestyle.Scoped);

            container.Register<
                DomainModel.Services.IPinBuilder,
                Services.Submission.PinBuilder>(Lifestyle.Singleton);

            container.Register<Persistence.MongoDB.DbContext>(() =>
            {
                return new Persistence.MongoDB.DbContext("mongodb://localhost:27017/pca");
            }, Lifestyle.Singleton);

            container.Register<
                DomainModel.Services.IStoreApplication,
                Persistence.MongoDB.DbServices.StoreApplication>(Lifestyle.Singleton);
        }
    }
}